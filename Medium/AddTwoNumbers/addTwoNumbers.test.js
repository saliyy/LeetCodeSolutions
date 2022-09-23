const addTwoNumbers = require('./addTwoNumbers')

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('Testing addTwoNumbers alg', () => {
    test('first', () => {
        const listNode = new ListNode(2, new ListNode(4, new ListNode(3)))
        const listNode2 = new ListNode(5, new ListNode(6, new ListNode(4)))

        const resultList = new ListNode(7, new ListNode(0, new ListNode(8)))

        expect(addTwoNumbers(listNode, listNode2)).toEqual(resultList)
    })

    test('second', () => {
        const listNode = new ListNode(0)
        const listNode2 = new ListNode(0)

        const resultList = new ListNode(0)


        expect(addTwoNumbers(listNode, listNode2)).toEqual(resultList)
    })
})
