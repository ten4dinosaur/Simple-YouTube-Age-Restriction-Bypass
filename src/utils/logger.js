import { getYtcfgValue } from '../components/innertubeClient';

const logPrefix = '%cSimple-YouTube-Age-Restriction-Bypass:';
const logPrefixStyle = 'background-color: #1e5c85; color: #fff; font-size: 1.2em;';
const logSuffix = '\uD83D\uDC1E You can report bugs at: https://github.com/zerodytrash/Simple-YouTube-Age-Restriction-Bypass/issues';

export function error(err, msg) {
    console.error(logPrefix, logPrefixStyle, msg, err, getYtcfgDebugString(), '\n\n', logSuffix);
}

export function info(msg) {
    console.info(logPrefix, logPrefixStyle, msg);
}

export function getYtcfgDebugString() {
    try {
        return (
            `InnertubeConfig: ` +
            `innertubeApiKey: ${getYtcfgValue('INNERTUBE_API_KEY')} ` +
            `innertubeClientName: ${getYtcfgValue('INNERTUBE_CLIENT_NAME')} ` +
            `innertubeClientVersion: ${getYtcfgValue('INNERTUBE_CLIENT_VERSION')} ` +
            `loggedIn: ${getYtcfgValue('LOGGED_IN')} `
        );
    } catch (err) {
        return `Failed to access config: ${err}`;
    }
}
