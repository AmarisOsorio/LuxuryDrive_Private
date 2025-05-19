const logoutController = {};

logoutController.logout = async (req , res) => {
    res.clearCookie("authToken")

    return res.json({messsage: "Logged out successfully"})
}

export default logoutController;