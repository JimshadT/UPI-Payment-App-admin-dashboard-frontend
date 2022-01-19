import { VpnKey, Group, Payment } from "@material-ui/icons";

import Login from "views/auth/Login.js";
import Users from "views/admin/users";
import Transactions from "views/admin/transactions";
import Transaction_details from "views/admin/transactions/transaction_details";

var adminRoutes = [
    
    {
        path: "/users",
        name: "Users",
        icon: Group,
        iconColor: "Primary",
        component: Users,
        layout: "/app",
        visibility: true,
    },
    {
        path: "/transactions",
        name: "Transactions",
        icon: Payment,
        iconColor: "Primary",
        component: Transactions,
        layout: "/app",
        visibility: true,
    },
    {
        path: "/transactionDetails/:transaction_id",
        name: "Transaction_details",
        icon: Payment,
        iconColor: "Primary",
        component: Transaction_details,
        layout: "/app",
        visibility: false,
    },
    {
        divider: true,
        layout: "/app",
        visibility: true,
    },
];

var authRoutes = [
    {
        path: "/login",
        name: "Login",
        icon: VpnKey,
        iconColor: "Info",
        component: Login,
        layout: "/auth",
    },
];
export { adminRoutes, authRoutes };
