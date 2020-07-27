firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//child removed:
database.ref("expenses").on("child_removed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child changed:
database.ref("expenses").on("child_changed", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

//child added:
database.ref("expenses").on("child_added", (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// database
//   .ref("expenses")
//   .once("value")
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSpanshot) => {
//       expenses.push({
//         id: childSpanshot.key,
//         ...childSpanshot.val(),
//       });
//     });
//     console.log(expenses);
//   });

// database.ref("expenses").on("value", (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((childSpanshot) => {
//     expenses.push({
//       id: childSpanshot.key,
//       ...childSpanshot.val(),
//     });
//   });
//   console.log(expenses);
// });

// database.ref("expenses").push({
//   description: "passage to india",
//   note: "biriyani",
//   amount: 12,
//   createdAt: 0,
// });

// database.ref().on(
//   "value",
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log("could not fetch data");
//   }
// );
// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     console.log(snapshot.val());
//   },
//   (e) => {
//     console.log("error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref("age").set(28);
// }, 3500);

// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   database.ref("age").set(30);
// }, 10500);

// database
//   .ref()
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((e) => {
//     console.log("error fetching data", e);
//   });

// database
//   .ref()
//   .set({
//     name: "Amith Yarra",
//     age: 23,
//     stressLevel: 6,
//     job: {
//       title: "Data Scientist",
//       company: "Google",
//     },
//     location: {
//       city: "Charlotte",
//       country: "United States",
//     },
//   })
//   .then(() => {
//     console.log("data is saved");
//   })
//   .catch((e) => {
//     console.log("this failed", e);
//   });

// database.ref().update({
//   stressLevel: 7,
//   "job/company": "Avid Exchange",
//   "location/city": "Charlotte",
// });
