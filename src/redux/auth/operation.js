import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, goitApi, setToken } from "../../components/config/goitApi";

export const registerThunk = createAsyncThunk(
  "register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk("logout", async (_, thunkAPI) => {
  try {
    await goitApi.post("/users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

//операція робить запит за нашими даними(name, email)
export const getMeThunk = createAsyncThunk("getMe", async (_, thunkAPI) => {
  // перевірка токена, чи є він в locale storage
  const savedToken = thunkAPI.getState().auth.token;
  // якщо токена немає - зупинити операцію
  if (savedToken === null) {
    return thunkAPI.rejectWithValue("Token is not exist");
  }
  // якщо є - продовжуємо
  try {
    // встановлюємо токен в хедери
    setToken(savedToken);
    // робимо запит до сервера
    const { data } = await goitApi.get("users/me");
    // віддаємо в-дь
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
