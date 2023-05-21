"use client";
import store, { persistor } from "@/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import SSRProvider from "react-bootstrap/SSRProvider";
import AppNavbar from "./AppNavbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SSRProvider>
          <AppNavbar />
          <div>{children}</div>
        </SSRProvider>
      </PersistGate>
    </Provider>
  );
};

export default Layout;
