const { v4: uuidv4 } = require('uuid');

const sampleState= 
[
  { 
   
    stateId : "1",
    stateNM: "Andhra Pradesh", 
    capital: "Amaravati", 
    region: "South", 
    image: "https://plus.unsplash.com/premium_photo-1697730420879-dc2a8dbaa31f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlydXBhdGl8ZW58MHx8MHx8fDA%3D"
   },
  { 
   
    stateId : 2,
    stateNM: "Arunachal Pradesh", 
    capital: "Itanagar", 
    region: "North-East", 
    image: "https://travelogyindia.b-cdn.net/storage/app/upload/tawang-monastery-1.jpg" 
  },
  { 
   
    stateId : 3,
    stateNM: "Assam", 
    capital: "Dispur", 
    region: "North-East", 
    image: "https://plus.unsplash.com/premium_photo-1661832611972-b6ee1aba3581?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 4,
    stateNM: "Bihar", 
    capital: "Patna", 
    region: "East", 
    image: "https://images.unsplash.com/photo-1724303740927-bbb568013fd1?q=80&w=741&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 5,
    stateNM: "Chhattisgarh", 
    capital: "Raipur", 
    region: "Central", 
    image: "https://plus.unsplash.com/premium_photo-1676368173752-0f25fa3c8356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 6,
    stateNM: "Goa", 
    capital: "Panaji", 
    region: "West", 
    image: "https://plus.unsplash.com/premium_photo-1697729701846-e34563b06d47?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 7,
    stateNM: "Gujarat", 
    capital: "Gandhinagar", 
    region: "West", 
    image: "https://images.unsplash.com/photo-1631983097767-099c77bf880d?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 8,
    stateNM: "Haryana", 
    capital: "Chandigarh", 
    region: "North", 
    image: "https://images.unsplash.com/photo-1605469237567-a39930679526?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 9,
    stateNM: "Himachal Pradesh", 
    capital: "Shimla", 
    region: "North", 
    image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 10,
    stateNM: "Jharkhand", 
    capital: "Ranchi", 
    region: "East", 
    image: "https://images.unsplash.com/photo-1747755372564-775dd9c20153?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmV0YXJoYXR8ZW58MHx8MHx8fDA%3D" 
  },
  { 
   
    stateId : 11 ,
    stateNM: "Karnataka", 
    capital: "Bengaluru", 
    region: "South", 
    image: "https://plus.unsplash.com/premium_photo-1697730337612-8bd916249e30?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 12,
    stateNM: "Kerala", 
    capital: "Thiruvananthapuram", 
    region: "South", 
    image: "https://images.unsplash.com/photo-1628918098760-471c0fad230c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 13,
    stateNM: "Madhya Pradesh", 
    capital: "Bhopal", 
    region: "Central", 
    image: "https://plus.unsplash.com/premium_photo-1697730370661-51bf72769ff6?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },

  { 
   
    stateId : 14,
    stateNM: "Maharashtra", 
    capital: "Mumbai", 
    region: "West", 
    image: "https://plus.unsplash.com/premium_photo-1697729588019-20a1f5a325d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWphbnRhJTIwJTI2JTIwRWxsb3JhJTIwQ2F2ZXN8ZW58MHx8MHx8fDA%3D" 
  },
  {
     
     stateId : 15,
     stateNM: "Manipur",
     capital: "Imphal", 
     region: "North-East", 
     image: "https://images.unsplash.com/photo-1760637626688-a9fc45b672b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TG9rdGFrJTIwTGFrZXxlbnwwfHwwfHx8MA%3D%3D" 
    },
  {
      
    stateId : 16,
    stateNM: "Meghalaya", 
    capital: "Shillong", 
    region: "North-East", 
    image: "https://images.unsplash.com/photo-1724038582853-d2af2786cfa8?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
     
    stateId : 17,
    stateNM: "Mizoram", 
    capital: "Aizawl", 
    region: "North-East", 
    image: "https://curlytales.com/wp-content/uploads/2019/04/mizo.jpg" 
  },
  { 
   
    stateId : 18,
    stateNM: "Nagaland", 
    capital: "Kohima", 
    region: "North-East", 
    image: "https://images.unsplash.com/photo-1712055196088-9bc6da4ffbce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RHp1a291JTIwVmFsbGV5fGVufDB8fDB8fHww" 
  },
  { 
   
    stateId : 19,
    stateNM: "Odisha", 
    capital: "Bhubaneswar", 
    region: "East", 
    image: "https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UHVyaXxlbnwwfHwwfHx8MA%3D%3D" 
  },
  { 
   
    stateId : 20,
    stateNM: "Punjab", 
    capital: "Chandigarh", 
    region: "North", 
    image: "https://images.unsplash.com/photo-1698380776884-25c2e6e426e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW1yaXRzYXIlMjAoR29sZGVuJTIwVGVtcGxlKXxlbnwwfHwwfHx8MA%3D%3D" 
  },
  { 
   
    stateId : 21,
    stateNM: "Rajasthan", 
    capital: "Jaipur", 
    region: "West", 
    image: "https://images.unsplash.com/photo-1589901164570-f9de6556e1c1?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 22,
    stateNM: "Sikkim", 
    capital: "Gangtok", 
    region: "North-East", 
    image: "https://plus.unsplash.com/premium_photo-1694475616112-bf74aa5f12ea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TmF0aHVsYSUyMFBhc3N8ZW58MHx8MHx8fDA%3D" 
  },
  { 
   
    stateId : 23,
    stateNM: "Tamil Nadu", 
    capital: "Chennai", 
    region: "South", 
    image: "https://images.unsplash.com/photo-1660918738010-295b09857f93?q=80&w=702&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
  },
  { 
   
    stateId : 24,
    stateNM: "Telangana", 
    capital: "Hyderabad", 
    region: "South", 
    image: "https://images.unsplash.com/photo-1741545979534-02f59c742730?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hhcm1pbmFyfGVufDB8fDB8fHww" 
  },
  { 
   
    stateId : 25,
    stateNM: "Tripura", 
    capital: "Agartala", 
    region: "North-East", 
    image: "https://tse1.mm.bing.net/th/id/OIP.fxRDOa-A0dDB3ihXPqDfogHaEK?pid=Api&P=0&h=180" 
  },
  { 
   
    stateId : 26,
    stateNM: "Uttar Pradesh", 
    capital: "Lucknow", 
    region: "North", 
    image: "https://images.unsplash.com/photo-1598324789736-4861f89564a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFRhaiUyME1haGFsfGVufDB8fDB8fHww" 
  },
  { 
   
    stateId : 27,
    stateNM: "Uttarakhand", 
    capital: "Dehradun", 
    region: "North", 
    image: "https://images.unsplash.com/photo-1712733900711-d0b929d0d7cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2VkYXJuYXRofGVufDB8fDB8fHww" 
  },
  { 
   
    stateId : 28,
    stateNM: "West Bengal", 
    capital: "Kolkata", 
    region: "East", 
    image: "https://images.unsplash.com/photo-1724159609417-0b84ff619e7c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RGFyamVlbGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
  }
];
module.exports={data :sampleState};
