/**
 * Copyright (c) 2024, WSO2 LLC. (https://www.wso2.com).
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import {
    Box,
    Container,
    IconButton
} from "@mui/material"
import Avatar from "@mui/material/Avatar"
import HeaderLogo from "../resources/header-logo.png"
import { useNavigate } from "react-router-dom"


export default function Header() {
    const navigate = useNavigate()

    return (
        <Box sx={{
            borderBottom: "1px solid var(--primary-color)",
            padding: "1rem 0",
        }}>
            <Container sx={{
                display: "flex",
                flexDirection: {
                    xs: "column",
                    sm: "row"
                },
                alignItems: "center",
                justifyContent: {
                    xs: "center",
                    sm: "space-between"
                }
            }}>
                <Box
                    component="img"
                    sx={{
                        objectFit: "cover",
                        width: "8rem",
                        marginLeft: {
                            xs: "0",
                            sm: "4rem"
                        },
                        ":hover": {
                            cursor: "pointer"
                        }
                    }}
                    alt="Header logo"
                    src={HeaderLogo}
                    onClick={() => navigate("/")}
                />

                <IconButton
                    color="primary"
                    sx={{
                        marginRight: {
                            xs: "0",
                            sm: "4rem"
                        }
                    }}
                    onClick={() => navigate("/author/5003")}
                >
                    <Avatar sx={{ bgcolor: "secondary.main" }}>S</Avatar>
                </IconButton>
            </Container>
        </Box>
    )
}
