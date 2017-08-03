
module.exports = {
    History: require("imports-loader?this=>window!./js/history"),
    KillRing: require("imports-loader?this=>window!./js/killring"),
    Input: require("imports-loader?this=>window!./js/input"),
    PathHandler: require("imports-loader?this=>window!./js/pathhandler"),
    Readline: require("imports-loader?this=>window!./js/readline"),
    Shell: require("imports-loader?this=>window!./js/shell")
};