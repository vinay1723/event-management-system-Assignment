import axios from "axios";

export async function signup(user) {
  try {
    const res = await axios({
      method: "POST",
      url: "https://ems-xb6r.onrender.com/api/v1/user/signup",
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}
export async function login(user) {
  try {
    const res = await axios({
      method: "POST",
      url: "https://ems-xb6r.onrender.com/api/v1/user/login",
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function logout() {
  try {
    const res = await axios({
      method: "GET",
      url: "https://ems-xb6r.onrender.com/api/v1/user/logout",
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function getAllEvents() {
  try {
    const res = await axios({
      method: "GET",
      url: `https://ems-xb6r.onrender.com/api/v1/userevent/events`,
      withCredentials: true,
    });

    return res.data.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function createEvent(event) {
  try {
    const res = await axios({
      method: "POST",
      url: `https://ems-xb6r.onrender.com/api/v1/userevent/${event.user}`,
      data: event,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateEvent(event) {
  try {
    const res = await axios({
      method: "PATCH",
      url: `https://ems-xb6r.onrender.com/api/v1/userevent/${event.user}`,
      data: event,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function deleteEvent(event) {
  try {
    const res = await axios({
      method: "DELETE",
      url: `https://ems-xb6r.onrender.com/api/v1/userevent/${event.user._id}`,
      data: event,
      withCredentials: true,
    });

    return res.data;
  } catch (error) {
    console.log(error.message);
  }
}

export async function updateSettings(user, data) {
  try {
    const res = await axios({
      method: "PATCH",
      url: `https://ems-xb6r.onrender.com/api/v1/user/updateMyPassword`,
      data: user,
      withCredentials: true,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

// http://localhost:3000/
// "https://ems-xb6r.onrender.com
