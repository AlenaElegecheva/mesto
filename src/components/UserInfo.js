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

  setUserInfo(object) {
    this._userNameInfo.textContent = object.username;
    this._aboutMeInfo.textContent = object.aboutme;
  }
}
