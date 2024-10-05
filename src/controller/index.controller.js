const getUserData = async (req, res) => {
    try {
        res.status(200).json({ status: true, user: { name: "Sachin Rawat", age: 24, gender: "male", emailAddress: "Sachin@adstia.com" } });
    }
    catch (error) {
        res.status(500).json({ status: false, error });
    }
}

module.exports = { getUserData };