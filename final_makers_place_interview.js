class Purchase {
  constructor() {
    this.dateObject = {};
    this.funnel = [
      "product_view",
      "purchase_click",
      "purchase_credit_card",
      "purchase_complete"
    ];
  }
  logInfo(inputs) {
    let counterObject = {
      product_view: 0,
      purchase_click: 0,
      purchase_credit_card: 0,
      purchase_complete: 0
    };
    let userObject = {};
    for (let i = 0; i < inputs.length; i++) {
      let inputLine = inputs[i];
      let session = inputLine[0];
      let time = inputLine[1];
      let dfull = new Date(time * 1000);
      let date = dfull.toDateString();
      let action = inputLine[2];

      //conditions:
      //1) userObject does not have date key for that date
      //2) dateObject does not have date key for that date
      //3) user sessionId does not exist in userObject[date]
      //4)

      if (!userObject[date]) {
        userObject[date] = {};
        userObject[date][session] = [action];
        this.dateObject[date] = counterObject;
      } else if (!userObject[date][session]) {
        userObject[date][session] = [action];
      } else {
        userObject[date][session].push(action);
      }
      this.dateObject[date][action] += 1;
    }
    console.log("dateObject", this.dateObject);
    console.log("userObject", userObject);

    let recDates = Object.keys(this.dateObject);
    let numDates = recDates.length;
    for (let j = 0; j < numDates; j++) {
      let numUsersForDay = Object.keys(userObject[recDates[j]]).length;
      this.conversionRates(recDates[j], numUsersForDay);
    }
  }

  conversionRates(date, numUsersForDay) {
    let actions = Object.keys(this.dateObject[date]);
    for (let i = 0; i < actions.length; i++) {
      let prevStepNumUsers;
      let stepNumUsers;
      let percentChange;
      stepNumUsers = this.dateObject[date][actions[i]];
      if (i > 0) {
        prevStepNumUsers = this.dateObject[date][actions[i - 1]];
        percentChange = (stepNumUsers / prevStepNumUsers) * 100;
      } else {
        prevStepNumUsers = 0;
        percentChange = 100;
      }
      let step = actions[i];
      console.log(
        date,
        "\n",
        step,
        ":",
        stepNumUsers,
        "\n",
        percentChange,
        "%"
      );
    }
  }
}

//// TEST //////
let inputs = [
  [12341323, 1470813365, "product_view"],
  [12341323, 1470814365, "purchase_click"],
  [42344234, 1470815365, "product_view"],
  [12341323, 1470816365, "purchase_credit_card"],
  [32466234, 1470827365, "product_view"],
  [42344234, 1470828365, "purchase_click"],
  [12341323, 1470829365, "purchase_complete"],
  [63344234, 1470840365, "purchase_click"]
];

let p = new Purchase();
p.logInfo(inputs);
