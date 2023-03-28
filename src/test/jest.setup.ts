import dotenv from "dotenv";
import "isomorphic-unfetch";
import nock from "nock";

dotenv.config({ path: ".env.test" });

afterAll(() => {
  nock.cleanAll();
  nock.restore();
});
