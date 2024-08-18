import { redirect } from "react-router-dom";
import { deleteContact } from "/contacts";

export async function action({ params }) {
  //throw new Error("oh dang!");
  await deleteContact(params.contactId);
  return redirect("WAD_CLASS_9_6420101/React_Routing_Tutorial/");
}