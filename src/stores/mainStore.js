import { defineStore } from "pinia";

export const useStore = defineStore('store', {
    state: () => ({

        username: '',
        password: '',
        isLogedIn: false,

        profile: {

            "contact": {
                "email": "info@mashoun.com",
                "number": "",
                "address": "",
                "facebook": "",
                "instagram": "",
                "tiktok": "",
                "linkedin": "",
                "getStartedUrl": ""
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
            return 'https://script.google.com/macros/s/AKfycbwI0wwMzkdjasoLymk-UbNhudwUUJp6HHy4Dh8l3gmSF_u9FBJz5OSxaiBOb745v1-9/exec'
        },

    }
})