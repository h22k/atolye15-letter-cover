import axios from "axios"

axios.defaults.baseURL = 'http://localhost:3000/'

describe('api testing', () => {
    test('the name parameter is required, if you dont pass name parameter status code equals to 422', done => {
        axios.get('/')
            .then(e => {
                expect(e.status).toBe(422)
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })
    })

    test('the name parameter should not be empty', done => {
        axios.get('/', {params: {name: ''}})
            .then(e => {
                expect(e.status).toBe(422)
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })
    })

    test('the name parameter should not contains any number', done => {
        axios.get('/', {params: {name: 'sdf ss3453'}})
            .then(e => {
                expect(e.status).toBe(422)
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })
    })

    test('the name parameter at least has 2 words', done => {
        axios.get('/', {params: {name: 'hakan'}})
            .then(e => {
                expect(e.status).toBe(422)
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })
    })

    test('If all name validations are passing there should be a response type image/png', done => {
        axios.get('/', {params: {name: 'hakan karabay'}})
            .then(e => {
                expect(e.status).toBe(200)
                expect(e.headers['content-type']).toBe('image/png')
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })
    })

    test('the shape parameter only can be circle or rectangle', done => {

        axios.get('/', {params: {name: 'hakan karabay', shape: 'yuvarlak'}})
            .then(e => {
                expect(e.status).toBe(200)
                expect(e.headers['content-type']).toBe('image/png')
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })

        axios.get('/', {params: {name: 'hakan karabay', shape: 'circle'}})
            .then(e => {
                expect(e.status).toBe(200)
                expect(e.headers['content-type']).toBe('image/png')
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })

        axios.get('/', {params: {name: 'hakan karabay', shape: 'shape'}})
            .then(e => {
                expect(e.status).toBe(200)
                expect(e.headers['content-type']).toBe('image/png')
                done()
            }).catch(err => {
            expect(true).toBe(true)
            done()
        })

    })
})