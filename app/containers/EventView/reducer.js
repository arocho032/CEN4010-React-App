import produce from 'immer';

export const initialState = {
	events: [
		{
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
		}
	]
}