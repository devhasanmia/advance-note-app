console.clear();
import { connect } from "mongoose";
import config from "./app/config";
import app from "./app";
const PORT = config.PORT;

async function main() {
  try {
    await connect(config.DATABASE_URL as string);
    console.log("Yay! Database is now connected!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {}
}

main();
