const TOKEN_KEY = '__token__'
const USER_KEY = '__user__'
const CART_KEY = '__cart__'

class AppStorage {
  constructor(storage) {
    this.storage = storage || window.localStorage

    /** Is storage is supported or not */
    if (!this.isSupported()) {
      throw new Error('Storage is not supported by browser!')
    }
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value))
  }

  getItem(key) {
    return JSON.parse(this.storage.getItem(key))
  }

  removeItem(key) {
    this.storage.removeItem(key)
  }

  clear() {
    this.storage.clear()
  }

  isSupported() {
    let supported = true

    if (!this.storage) {
      supported = false
    }

    return supported
  }
}

const appLocalStorage = new AppStorage()
// const appSesstionLocalStorage = new AppStorage(window.sessionStorage);
const appStorage = appLocalStorage //MARK: - Default localstorage

const tokenService = {
  getToken() {
    return appStorage.getItem(TOKEN_KEY)
  },

  saveToken(accessToken) {
    appStorage.setItem(TOKEN_KEY, accessToken)
  },

  removeToken() {
    appStorage.removeItem(TOKEN_KEY)
  },
}

const userService = {
  getUser() {
    return appStorage.getItem(USER_KEY)
  },

  saveUser(user) {
    appStorage.setItem(USER_KEY, user)
  },

  removeUser() {
    appStorage.removeItem(USER_KEY)
  },
}

const cartService = {
  getCart() {
    return appStorage.getItem(CART_KEY)
  },

  updateCart(cart) {
    appStorage.setItem(CART_KEY, cart)
  },
}
export { tokenService, userService, cartService }
