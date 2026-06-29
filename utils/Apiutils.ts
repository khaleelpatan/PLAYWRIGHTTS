import { APIRequestContext } from "@playwright/test";
export default class Apiutils {
  readonly request: APIRequestContext;

  constructor(request: APIRequestContext) {
    this.request = request;
  }

  async postrequest(url: string, payLoad: any) {
    const postresponse = await this.request.post(url,
      {
        headers: {
          "content-type": "application/json"
        },
        data: payLoad
      });
    return postresponse;

  }


  async getallresources(url: string) {
    const getresponse = await this.request.get(url);
    return getresponse;

  }


  async getoneresource(url: string, id: string) {
    const getresponse = await this.request.get(url + '/' + id);
    return getresponse;

  }



  async updateresource(url: string, id: string, payLoad: any) {
    const getresponse = await this.request.put(url + '/' + id,
      {
        headers: {
          "content-type": "application/json"
        },
        data: payLoad
      });
    return getresponse;

  }

  async Patchresource(url: string, id: string, payLoad: any) {
    const getresponse = await this.request.patch(url + '/' + id, {
      headers: {
        "content-type": "application/json"
      },
      data: payLoad
    });
    return getresponse;

  }

  async deleteresource(url: string, id: string) {
    const getresponse = await this.request.delete(url + '/' + id);
    return getresponse;

  }

}







