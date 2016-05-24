'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = setWindowData;
function setWindowData(req, server_html) {
    var window_data = arguments.length <= 2 || arguments[2] === undefined ? [] : arguments[2];

    var window = {
        isWeixin: req.isWeixin ? true : false,
        server_html: server_html,
        user_info: '',
        server_data: ''
    };
    if (req.webapp_userInfo && req.webapp_userInfo.id) {
        window.user_info = 'window.webapp_userInfo =' + JSON.stringify(req.webapp_userInfo);
    }
    if (window_data) {
        for (var i = 0; i < window_data.length; i++) {
            if (window_data[i].name && window_data[i].data) {
                window.server_data += 'window.' + window_data[i].name + '= ' + (window_data[i].data + ';');
            }
        }
    }
    window.server_data += 'window.showTopBar=' + req.showTopBar + ';';

    return window;
}

//# sourceMappingURL=setWindowDate.js.map