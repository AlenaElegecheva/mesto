export default class UserInfo {
  constructor({userNameInfo, aboutMeInfo, userAvatar}) {
    this._userNameInfo = userNameInfo;
    this._aboutMeInfo = aboutMeInfo;
    this._userAvatar = userAvatar;
  }

  getUserInfo() {
    const profileFormInfo = {
      userNameInfo: this._userNameInfo.textContent,
      aboutMeInfo: this._aboutMeInfo.textContent,
      userAvatar: this._userAvatar.src
    }
    return profileFormInfo;
  }

  setUserInfo(object) {
    this._userNameInfo.textContent = object.name;
    this._aboutMeInfo.textContent = object.about;
    this.setUserAvatar(object);
  }

  setUserAvatar(object) {
    this._userAvatar.src = object.avatar;
  }
}
