export const httpMehthod = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

export const httpStatusCode = {
  "200_OK": 200,
  "201_CREATED": 201,
  "400_BAD_REQUEST": 400,
  "404_NOT_FOUND": 404,
} as const;
