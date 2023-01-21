export default class UserInfo {
  constructor({userNameInfo, aboutMeInfo}) {
    this._userNameInfo = userNameInfo;
    this._aboutMeInfo = aboutMeInfo;
  }

  getUserInfo() {
    const profileFormInfo = {
      userNameInfo: this._userNameInfo.textContent,
      aboutMeInfo: this._aboutMeInfo.textContent
    }

    return profileFormInfo;
  }

  setUserInfo() {
    this._userNameInfo.textContent = username.value;
    this._aboutMeInfo.textContent = aboutme.value;
  }
}
