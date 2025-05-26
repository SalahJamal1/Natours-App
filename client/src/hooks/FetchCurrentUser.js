import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AccountgetUser } from "../store/Account";

export function FetchCurrentUser() {
  const dispatch = useDispatch();
  useEffect(
    function () {
      async function Getcurrentuser() {
        dispatch(AccountgetUser());
      }
      Getcurrentuser();
    },
    [dispatch]
  );
}
