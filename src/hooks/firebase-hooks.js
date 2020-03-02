import { useObject } from "react-firebase-hooks/database";
import { connection } from "../firebase-config";

const useFirebaseDatabase = refName => {
  const ref = connection.database().ref("counter");
  const [value, loading, error] = useObject(ref);
  const setValue = newValue => ref.set(newValue);

  return { value, setValue, loading, error };
};

export { useFirebaseDatabase };
