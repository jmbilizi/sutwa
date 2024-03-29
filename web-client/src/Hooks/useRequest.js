import axios from "axios";
import { useState } from "react";

export const useRequest = ({ url, method, body, onSuccess }) => {
  const [errors, setErrors] = useState(null);

  const doRequest = async () => {
    try {
      const response = await axios[method](url, body);
      console.log(response.data);
      if (onSuccess) {
        onSuccess(response);
      }
      return response.data;
    } catch (err) {
      setErrors(
        <div className="alert alert-danger text-center">
          <h4>Ooops...</h4>
          <ul className="my-0">
            {err.response.data.errors.map((error) => (
              <li key={error.message}>{error.message}</li>
            ))}
          </ul>
        </div>
      );
    }
  };

  return { doRequest, errors };
};
