export const candidatesList=[
    {
        "id": 1,
        "name": "John Smith",
        "adjudication": "engage",
        "status": "CLEAR",
        "location": "Bangalore",
        "date": "22/10/2019"
    },
    {
        "id": 2,
        "name": "Sarene",
        "adjudication": "pre adverse action",
        "status": "CONSIDER",
        "location": "Hyderabad",
        "date": "20/09/2020"
    },
    {
        "id": 3,
        "name": "Walsh",
        "adjudication": "",
        "status": "CLEAR",
        "location": "US",
        "date": "17/03/2020"
    },
    {
        "id": 4,
        "name": "Maurizia",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Australia",
        "date": "18/04/2020"
    },
    {
        "id": 5,
        "name": "Kendre",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Africa",
        "date": "06/05/2019"
    },
    {
        "id": 6,
        "name": "Erastus",
        "adjudication": "",
        "status": "CLEAR",
        "location": "Chennai",
        "date": "13/05/2020"
    },
    {
        "id": 7,
        "name": "Jereme",
        "adjudication": "",
        "status": "CLEAR",
        "location": "Delhi",
        "date": "15/05/2020"
    },
    {
        "id": 8,
        "name": "Cari",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Mumbai",
        "date": "18/06/2019"
    },
    {
        "id": 9,
        "name": "Kimble",
        "adjudication": "",
        "status": "CLEAR",
        "location": "London",
        "date": "13/07/2020"
    },
    {
        "id": 10,
        "name": "Bob",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Tokyo",
        "date": "25/08/2019"
    },
    {
        "id": 11,
        "name": "Alice",
        "adjudication": "",
        "status": "CLEAR",
        "location": "Melbourne",
        "date": "23/02/2020"
    },
    {
        "id": 12,
        "name": "George",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Sydney",
        "date": "27/01/2019"
    },
    {
        "id": 13,
        "name": "Thomas",
        "adjudication": "",
        "status": "CLEAR",
        "location": "Paris",
        "date": "13/04/2020"
    },
    {
        "id": 14,
        "name": "Albert",
        "adjudication": "",
        "status": "CLEAR",
        "location": "Germany",
        "date": "09/05/2020"
    },
    {
        "id": 15,
        "name": "Clinton",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Japan",
        "date": "29/06/2019"
    },
    {
        "id": 16,
        "name": "Antony",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Berlin",
        "date": "30/11/2020"
    },
    {
        "id": 17,
        "name": "Paul",
        "adjudication": "",
        "status": "CLEAR",
        "location": "Switcherland",
        "date": "31/05/2019"
    },
    {
        "id": 18,
        "name": "Charlie",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Malaysia",
        "date": "28/08/2020"
    },
    {
        "id": 19,
        "name": "Jessie",
        "adjudication": "",
        "status": "CONSIDER",
        "location": "Canada",
        "date": "19/12/2019"
    }
]
export const adverseActionsList=[
    {
        "id":1,
        "name":"John Smith",
        "status":"scheduled",
        "preNoticeDate":"2/22/2022",
        "postNoticeDate":"2/22/2022"
    },
    {
        "id":2,
        "name":"Sarene",
        "status":"scheduled",
        "preNoticeDate":"2/22/2022",
        "postNoticeDate":"2/22/2022"
    },
    {
        "id":3,
        "name":"Walsh",
        "status":"scheduled",
        "preNoticeDate":"2/22/2022",
        "postNoticeDate":"2/22/2022"
    },
]
export const CandidateDetail={
    "id": 1,
    "name": "John Smith",
    "adjudication": "",
    "status": "CLEAR",
    "location": "Bangalore",
    "date": "22/10/2019",
    "email":"John.smith@checkr.com",
    "dob":"1990-09-10 (26)",
    "phone":"(555) 555-5555",
    "zipcode":"94158",
    "socialSecurity":"XXX-XX-6789",
    "driversLicense":"FTEST1111 (CA)",
    "createdAt":"Nov 29,2016 11:05:57 AM",
    "package":"Employee pro",
    "completedDate":"Dec 4, 2016 12:00:00 PM",
    "turnAroundTime":"1 Day , 14 hours",
    "courtSearch":[
      {
          "date": "2/22/2022",
          "id": 1,
          "search": "SSN Verification",
          "status": "CLEAR"
        },
        {
          "date": "3/13/2022",
          "id": 2,
          "search": "Sex Offender",
          "status": "CLEAR"
        },
        {
          "date": "7/2/2022",
          "id": 3,
          "search": "Global Watchlist",
          "status": "CONSIDER"
        },
        {
          "date": "2/20/2022",
          "id": 4,
          "search": "Federal Criminal",
          "status": "CLEAR"
        },
        {
          "date": "5/19/2022",
          "id": 5,
          "search": "County Criminal",
          "status": "CLEAR"
        }
    ]
}
export const EditCandidateDetail=CandidateDetail
EditCandidateDetail.adjudication="Engage"
