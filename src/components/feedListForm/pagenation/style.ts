import styled from "styled-components";

export const PageNationSection = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100px;
	gap: 20px;
	margin-bottom: 20px;
	button {
		font-size: 14px;
		color: #a7a7a7;
		cursor: pointer;
		&.active {
			width: 30px;
			height: 30px;
			border-radius: 100%;
			background-color: #2bb673;
			color: white;
			font-weight: 900;
		}
	}
`;
