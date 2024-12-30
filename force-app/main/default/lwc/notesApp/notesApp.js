import { LightningElement, wire } from 'lwc';
import doInit from '@salesforce/apex/NotesAppController.doInit';
import saveNote from '@salesforce/apex/NotesAppController.saveNote';
import deleteNote from '@salesforce/apex/NotesAppController.deleteNote';
import getNotes from '@salesforce/apex/NotesAppController.getNotes';
import {refreshApex} from '@salesforce/apex';

const DEFAULT_NOTE_FORM = {
    Name:"",
    Body__c:""
}

export default class NotesApp extends LightningElement {
    showNoteModal = false;
    noteRecord = DEFAULT_NOTE_FORM;
    selectedNoteRecordId = null;
    noteList = [];
    wiredNotesResult;
    isSaving = false;
    isDeleting = false;

    constructor() {
        super();
        this.doInit();
    }
    get modalTitle() {
        return this.selectedNoteRecordId ? 'Edit Note' : 'New Note';
    }
    get isSaveButtonDisabled() {
        if((!this.noteRecord) || (!this.noteRecord.Name) || (!this.noteRecord.Body__c) || (this.isSaving)) {
            return true;
        } else {
            return false;
        }
    }
    @wire(getNotes)
    noteListInfo(result){
        this.wiredNotesResult = result;
        const {data, error} = result;
        if(data){
            console.log(JSON.stringify(data));
            this.noteList = data.map(item=>{
                let formattedDate = new Date(item.LastModifiedDate).toDateString();
                return {...item, formattedDate};
            });
        }
        if(error){
            console.log('Something went wrong...');
        }
    }
    handleNewNote() {
        this.showNoteModal = true;
    }
    handleEditNote(event) {
        const {recordid} = event.target.dataset;
        const noteToEdit = this.noteList.find(item=>item.Id === recordid);
        this.noteRecord = {
            Name:noteToEdit.Name,
            Body__c:noteToEdit.Body__c
        }
        this.selectedNoteRecordId = recordid;
        this.showNoteModal = true;
    }
    handleDeleteNote(event) {
        this.isDeleting = true;
        const {recordid} = event.target.dataset;
        deleteNote({
            recordId:recordid
        }).then(()=>{
            this.refresh();
            this.resetDefaults();
        }).catch((error)=>{
            console.error('error', error.message.body);
        })
    }
    handleCloseNoteModal() {
        this.showNoteModal = false;
        this.resetDefaults();
    }
    handleNoteChange(event) {
        const {name, value} = event.target;
        this.noteRecord = {...this.noteRecord, [name]:value};
    }
    handleSaveNote(event) {
        event.preventDefault();
        this.isSaving = true;
        this.saveNote();
    }
    saveNote() {
        saveNote({
            recordId:this.selectedNoteRecordId, 
            title:this.noteRecord.Name, 
            body:this.noteRecord.Body__c
        }).then(()=>{
            // this.showNotification('Great Job!', 'success');
            this.showNoteModal = false;
            this.refresh();
            this.resetDefaults();
        }).catch((error)=>{
            // this.showNotification('Something went wrong...', 'error');
            console.error('error', error.message.body);
        })
    }
    showNotification(message, variant) {
        const elem = this.template.querySelector('c-notification');
        if(elem){
            elem.showToast(message, variant);
        }
    }
    refresh() {
        return refreshApex(this.wiredNotesResult);
    }
    resetDefaults() {
        this.noteRecord = DEFAULT_NOTE_FORM;
        this.selectedNoteRecordId = null;
        this.isDeleting = false;
        this.isSaving = false;
    }
    doInit() {
        doInit().then(()=>{
            this.refresh();
        }).catch((error)=>{
            console.error('error', error.message.body);
        })
    }
}