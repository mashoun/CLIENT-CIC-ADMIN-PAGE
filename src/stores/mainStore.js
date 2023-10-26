import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        username: '',
        password: '',
        isLogedIn: false,

        profile: {

            "contact": {
                "email": "",
                "number": "",
                "address": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "linkedin": "",
                "getStartedUrl": "",
                "whatsapp":"",
                "ardeNumber":""
            },
            "media": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "index": ""
                }
            ],
            "partners": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "index": ""
                },
            ],
            "workshops": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "title": "",
                    "description": "",
                    "index": "",
                    "schedule":""
                }
            ],
            "majors": [
                {
                    "id": "",
                    "date": "",
                    "thumbnail": "",
                    "title": "",
                    "description": "",
                    "index": "",
                    "tag":""
                }
            ],
            "fees": [
                {
                    "id": "",
                    "date": "",
                    "degree": "",
                    "credits": "",
                    "applicationFees": "",
                    "downPayment": "",
                    "p18Month": "",
                    "totalFees": "",
                    "index": ""
                },
            ],
            "team":[
                {
                    "id": "",
                    "thumbnail": "",
                    "name": "",
                    "position": "",
                    "description": "",
                    "index": ""
                }
            ],
            "events":[
                {
                    "id": "",
                    "date": "",
                    "embed": "",
                    "title": "",
                    "description": "",
                    "index": ""
                }
            ]

        }



    }),
    actions: {

        getApi() {
            return 'https://script.google.com/macros/s/AKfycby1B-IjtRK1F3Hami2EwDBT-sOk18A_NH7SH8Gh5fun2QseVg0UUOe16dY_so_Teiw/exec'
        },

    }
})