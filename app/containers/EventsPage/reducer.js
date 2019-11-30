import produce from 'immer';

export const initialState = {
	events: [
		{
			hostId: 1,
			eventId: 1,
			name: "Class Presentation",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			loc: {
				name: "Green Library",
				x_cord: 0,
				y_cord: 0
			},
			time: {
				date: "Oct. 1, 2019",
				time: "3:00 pm"
			}
		},
		{
			hostId: 1,
			eventId: 2,
			name: "Something Else",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			loc: {
				name: "Green Library",
				x_cord: 0,
				y_cord: 0
			},
			time: {
				date: "Oct. 3, 2019",
				time: "4:00 pm"
			}
		},
		{
			hostId: 1,
			eventId: 3,
			name: "Something Else 2",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			loc: {
				name: "Green Library",
				x_cord: 0,
				y_cord: 0
			},
			time: {
				date: "Oct. 3, 2019",
				time: "4:00 pm"
			}
		},
		{
			hostId: 1,
			eventId: 4,
			name: "Something Else 3",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			loc: {
				name: "Green Library",
				x_cord: 0,
				y_cord: 0
			},
			time: {
				date: "Oct. 3, 2019",
				time: "4:00 pm"
			}
		}
	]
}