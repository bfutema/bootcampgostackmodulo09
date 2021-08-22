const sagas = require("./sagas")
// @ponicode
describe("sagas.setToken", () => {
    test("0", () => {
        let callFunction = () => {
            sagas.setToken({ payload: { auth: "user-name" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sagas.setToken({ payload: { auth: "username" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sagas.setToken({ payload: { auth: "user name" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sagas.setToken({ payload: { auth: 123 } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sagas.setToken({ payload: { auth: "user123" } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sagas.setToken({ payload: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
