public with sharing class NotesAppController {
    @AuraEnabled
    public static Boolean saveNote(String recordId, String title, String body) {
        try {
            if(String.isEmpty(recordId)) {
                Note__c noteToInsert = new Note__c();
                noteToInsert.Name = title;
                noteToInsert.Body__c = body;
                insert noteToInsert;
                return true;
            } else {
                Note__c noteToUpdate = [
                    SELECT Id, Name, Body__c, LastModifiedDate
                    FROM Note__c
                    WHERE Id = :recordId
                ][0];
                noteToUpdate.Name = title;
                noteToUpdate.Body__c = body;
                update noteToUpdate;
                return true;
            }
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<Note__c> getNotes() {
        return [
            SELECT Id, Name, Body__c, LastModifiedDate
            FROM Note__c
            ORDER BY LastModifiedDate DESC
        ];
    }
    @AuraEnabled
    public static Boolean deleteNote(String recordId) {
        try {
            if(!String.isEmpty(recordId)) {
                delete [SELECT Id FROM Note__c WHERE Id = :recordId];
                return true;
            } else {
                return false;
            }
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled
    public static Boolean doInit() {
        try {
            List<Note__c> allNotes = [
                SELECT Id
                FROM Note__c
            ];
            if(!allNotes.isEmpty()) {
                delete allNotes;
            }
            Note__c welcomeNote = new Note__c();
            welcomeNote.Name = 'Welcome!';
            welcomeNote.Body__c = 'Get started by creating your first note!';
            insert welcomeNote;
            return true;
        } catch(Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}