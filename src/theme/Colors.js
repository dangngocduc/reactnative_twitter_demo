
const colors = {
    primary : '#1DA1F2',
    secondary : '#FFFFFF',
    background : '#10171e',
    error : '#B00200',
    onPrimary : "#FFFFFF",
    onSecondary : "#333333",
    onBackground : '#FFFFFF',
    onError : '#FFFFFF',
    inActive : '#CCC',
    iconColor : '#1DA1F2',
    dividerColor : '#E1E8ED'
}

export function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}


export default colors
