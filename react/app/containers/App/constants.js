/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const REGISTER_PAGE_URL = '/register';
export const OFFER_PAGE_URL = '/offer/:offerId';
export const OFFER_NEW_PAGE_URL = '/offernew';
export const INTERNET_ERROR_MESSAGE = 'Network status is unstable';
