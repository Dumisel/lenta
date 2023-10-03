const checkRes = (res: Response) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};

export const fetchData = (url: string, method: string, data?: any, token?: string) => {
  return fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(!!token && { Authorization: `Token ${token}` }),
    },
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => checkRes(res));
};

export const fetchSignIn = (data: any): any => {
  console.log(data);
  // return fetchData(`url.com/login/`, 'POST', data).then((res) => checkRes(res));
  return {
    login: 'login',
    token: 'token',
    name: 'Name Name',
    photo:
      'https://sun9-north.userapi.com/sun9-78/s/v1/ig2/nqtA2B6RTvn847GOO7O7SukmarJ7cp966DVid-AqjZ_5p7tpwHUNucjRDay43XWfGvfRPmOdfvj9se_nTc6bR1wI.jpg?size=512x512&quality=95&type=album',
  };
};
