var anupam = {
    dbId: 122,
    email: "anupam@gmail.com",
    userId: 1122,
    startTrial: function () {
        return "trial started";
    },
    getCoupon: function (name) {
        if (name === void 0) { name = "anupam"; }
        return name.length;
    },
};
// interface Admin extends User {
//     role: 'admin' | 'ta' | 'learner'
// }
