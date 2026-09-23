const request = require("supertest");
const app = require("./server");

test("GET /home should return home page", async () => {
    const response = await request(app).get("/home");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Welcome to Home Page");
});

test("GET /contact should return contact page", async () => {
    const response = await request(app).get("/contact");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Welcome to Contact Page");
});

test("GET /about should return about page", async () => {
    const response = await request(app).get("/about");

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe("Welcome to About Page");
});

test("POST /user should create a user", async () => {
    const response = await request(app)
        .post("/user")
        .send({
            name: "Sejal",
            age: 18
        });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("User created successfully");
    expect(response.body.data.name).toBe("Sejal");
});
