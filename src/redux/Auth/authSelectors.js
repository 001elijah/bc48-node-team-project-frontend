export const selectorIsAuth = state => Boolean(state.auth.token);

export const selectorTheme = state => state.auth.theme;

export const selectorUserName = state => state.auth.userName;

export const selectorAvatarURL = state => state.auth.avatarUrl;
