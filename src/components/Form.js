import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Box } from "@material-ui/core";
import { Radio } from "@material-ui/core";
import { RadioGroup } from "@material-ui/core";
import { FormControlLabel } from "@material-ui/core";
import { FormControl } from "@material-ui/core";
import { FormGroup } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import Table from "../components/Table";

const Form = () => {
   
    const paperStyle = {
        padding: "50px 150px",
        width: 800,
        margin: "150px auto",
    };
    const paperStyle1 = {
        marginLeft: "0px",
    };
    return (
        <>
            <Grid>
                <div className="formm">
                    <Paper elevation={10} style={paperStyle}>
                        <h2>Add A Student</h2>
                        <Typography variant="caption">
                            Please fill this form for Add A Student
                        </Typography>

                        <div className="formmm mt-4">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                                style={paperStyle1}
                            >
                                <br />
                                <h5 className="mt-2">First Name</h5>
                                <TextField
                                    id="outlined-basic"
                                    label="First Name"
                                    name="firstname"
                                    variant="outlined"
                                />
                            </Box>
                        </div>
                        <div className="formmm mt-4">
                            <Box
                                component="form"
                                sx={{
                                    "& > :not(style)": { m: 1, width: "25ch" },
                                }}
                                noValidate
                                autoComplete="off"
                                style={paperStyle1}
                            >
                                <br />
                                <h5 className="mt-2">Last Name</h5>
                                <TextField
                                    id="outlined-basic"
                                    label=" Last Name"
                                    variant="outlined"
                                    name="lastname"
                                />
                            </Box>
                        </div>
                        <br />
                        <br />
                        <FormControl>
                            <h5>Gender</h5>
                            <RadioGroup name="gender">
                                <FormControlLabel
                                    value="female"
                                    control={<Radio />}
                                    label="Female"
                                />
                                <FormControlLabel
                                    value="male"
                                    control={<Radio />}
                                    label="Male"
                                />
                                <FormControlLabel
                                    value="other"
                                    control={<Radio />}
                                    label="Other"
                                />
                            </RadioGroup>
                        </FormControl>
                        <br />
                        <br />
                        <div>
                            <h5>Hobbies</h5>
                        </div>
                        <FormGroup>
                            <FormControlLabel control={<Checkbox value="Reading" name="hobbies"/>} label="Reading" />
                            <FormControlLabel control={<Checkbox value="Bike Riding" name="hobbies"/>} label="Bike Riding" />
                            <FormControlLabel control={<Checkbox value="Car Driving" name="hobbies"/>} label="Car Driving" />
                            <FormControlLabel control={<Checkbox value="Listening to music" name="hobbies"/>} label="Listening to music" />
                        </FormGroup>
                        <br />
                        <br />
                        <button type="Submit" className="btn btn-primary">Submit</button>
                    </Paper>
                </div>
            </Grid>
            <Table/>
        </>
    );
};
export default Form;
