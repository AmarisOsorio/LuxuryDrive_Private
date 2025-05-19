import express from "express";
import cookieParser from "cookie-parser";

import brandsRoute from "./src/routes/Brands.js"
import modelsRoute from "./src/routes/models.js"
import vehiclesRoute from "./src/routes/vehicles.js"
import branchesRoute from "./src/routes/branches.js"
import stockRoute from "./src/routes/stock.js"
import RoleRoute from "./src/routes/Role.js"
import EmployeesRoute from "./src/routes/employees.js";
import clientsRoute from "./src/routes/clients.js"
import ordersRoute from "./src/routes/orders.js";
import servicesRoute from "./src/routes/services.js";
import servicesProvided from "./src/routes/servicesProvided.js"
import resgisterEmployeesRoute from "./src/routes/registerEmployee.js";
import loginRoute from "./src/routes/login.js";
import logoutRoute from "./src/routes/logout.js";

const app = express();

app.use(express.json());
app.use(cookieParser()); // Que acepte cookies

app.use("/api/brands", brandsRoute);
app.use("/api/models", modelsRoute);
app.use("/api/vehicles", vehiclesRoute);
app.use("/api/branches", branchesRoute);
app.use("/api/stock", stockRoute);
app.use("/api/Role", RoleRoute);
app.use("/api/Employees", EmployeesRoute);
app.use("/api/clients", clientsRoute);
app.use("/api/orders" , ordersRoute);
app.use("/api/services", servicesRoute);
app.use("/api/servicesProvided", servicesProvided);
app.use("/api/registerEmployees",resgisterEmployeesRoute);

/* LOGIN */
app.use("/api/login", loginRoute);
app.use("/api/logout", logoutRoute);






export default app;