const BASE_URL = "http://localhost:3001";
//process.env.REACT_APP_BASE_URL ||
/** API Class.
 *
 * Static class tying together methods used to get/send to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // Remember, the backend needs to be authorized with a token
  // We're providing a token you can use to interact with the backend API
  // DON'T MODIFY THIS TOKEN
  static token = null;

  static async request({ endpoint, data = {}, method = "GET" }) {
    const url = new URL(`${BASE_URL}/${endpoint}`);
    const headers = {
      authorization: `Bearer ${this.token}`,
      'content-type': 'application/json',
    };

    url.search = (method === "GET")
      ? new URLSearchParams(data).toString()
      : "";

    // set to undefined since the body property cannot exist on a GET method
    const body = (method !== "GET")
      ? JSON.stringify(data)
      : undefined;

    const resp = await fetch(url, { method, body, headers });

    if (!resp.ok) {
      console.error("API Error:", resp.statusText, resp.status);
      const message = (await resp.json()).error.message;
      throw Array.isArray(message) ? message : [message];
    }

    return await resp.json();
  }

  // Individual API routes

  /** Get details on a company by handle. */
  static async getCompany(handle) {
    let res = await this.request({ endpoint: `companies/${handle}` });
    return res.company;
  }

  /** Get all companies */
  static async getCompanies(searchParam = "") {
    const searchData = searchParam ? { nameLike: searchParam } : {};
    let res = await this.request({ endpoint: `companies`, data: searchData });
    return res.companies;
  }

  /** Get all jobs */
  static async getJobs(searchParam = "") {
    const searchData = searchParam ? { title: searchParam } : {};
    let res = await this.request({ endpoint: `jobs`, data: searchData });
    return res.jobs;
  }

  /** Login, returns token */
  static async login(userData) {
    let res = await this.request({
      endpoint: `auth/token`,
      data: userData,
      method: "POST"
    });
    return res.token;
  }

  /** Given data about a user make an api call and returns a JWT. */
  static async register(registerData) {
    let res = await this.request({
      endpoint: `auth/register`,
      data: registerData,
      method: "POST"
    });
    return res.token;
  }

  /** Gets user based on their username. Returns information about a user like:
   * {
   *    username: testuser,
   *    firstName: test,
   *    lastName: user,
   *    email: e@email.com,
   *    isAdmin: false,
   *    applications: [jobId, ...]
   * }
  */
  static async getUser(username) {
    let res = await this.request({
      endpoint: `users/${username}`,
      method: "GET"
    });
    return res.user;
  }

  /** Updates a user's firstName, lastName, or email. Returns info like:
 * {
 *    username: testuser,
 *    firstName: test,
 *    lastName: user,
 *    email: e@email.com,
 *    isAdmin: false,
 * }
*/
  static async updateUser(username, updateData) {
    let res = await this.request({
      endpoint: `users/${username}`,
      data: updateData,
      method: "PATCH"
    });
    return res.user;
  }

}

export default JoblyApi;
