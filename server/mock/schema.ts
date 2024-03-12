export default {
  users: {
    1: { id: 1, name: 'John Doe', email: 'john@example.com' },
    2: { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    3: { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    4: { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
    5: { id: 5, name: 'Charlie Davis', email: 'charlie@example.com' }
  },
  polls: {
    1: {
      id: 1,
      title: 'Poll Title 1',
      options: [
        { id: 1, label: 'Option 1 for Poll 1', votes: 0 },
        { id: 2, label: 'Option 2 for Poll 1', votes: 0 },
        { id: 3, label: 'Option 3 for Poll 1', votes: 0 }
      ],
      createdBy: 2,
      createdAt: '2024-03-11T03:47:45Z'
    },
    2: {
      id: 2,
      title: 'Poll Title 2',
      options: [
        { id: 4, label: 'Option 1 for Poll 2', votes: 0 },
        { id: 5, label: 'Option 2 for Poll 2', votes: 0 },
        { id: 6, label: 'Option 3 for Poll 2', votes: 0 }
      ],
      createdBy: 3,
      createdAt: '2024-03-12T03:47:45Z'
    },
    3: {
      id: 3,
      title: 'Poll Title 3',
      options: [
        { id: 7, label: 'Option 1 for Poll 3', votes: 0 },
        { id: 8, label: 'Option 2 for Poll 3', votes: 0 },
        { id: 9, label: 'Option 3 for Poll 3', votes: 0 }
      ],
      createdBy: 4,
      createdAt: '2024-03-13T03:47:45Z'
    },
    4: {
      id: 4,
      title: 'Poll Title 4',
      options: [
        { id: 10, label: 'Option 1 for Poll 4', votes: 0 },
        { id: 11, label: 'Option 2 for Poll 4', votes: 0 },
        { id: 12, label: 'Option 3 for Poll 4', votes: 0 }
      ],
      createdBy: 5,
      createdAt: '2024-03-14T03:47:45Z'
    }
    // ... Continues for Polls 5 through 11
  },
  votes: {
    1: { id: 1, pollId: 1, userId: 1, optionId: 1 },
    2: { id: 2, pollId: 1, userId: 2, optionId: 2 }
    // ... Define votes 3 through 20 with varying pollId, userId, and optionId
  }
}
