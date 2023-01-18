import { render, fireEvent } from "@testing-library/react";
import Snowman from "./Snowman";
import img0 from "./0.png";
import img1 from "./1.png";
import img2 from "./2.png";
import img3 from "./3.png";
import img4 from "./4.png";
import img5 from "./5.png";
import img6 from "./6.png";

it("matches snapshot", function () {
    const { container } = render(<Snowman />);
    expect(container).toMatchSnapshot();
});

it("ends the game after six wrong guesses", function () {
    const { container } = render(<Snowman />);

    // grab six buttons that aren't in "apple"
    const zButton = container.querySelector('button[value="z"]');
    const qButton = container.querySelector('button[value="q"]');
    const bButton = container.querySelector('button[value="b"]');
    const wButton = container.querySelector('button[value="w"]');
    const jButton = container.querySelector('button[value="j"]');
    const oButton = container.querySelector('button[value="o"]');
    // click each of them
    fireEvent.click(zButton);
    fireEvent.click(qButton);
    fireEvent.click(bButton);
    fireEvent.click(wButton);
    fireEvent.click(jButton);
    fireEvent.click(oButton);

    // test that there aren't buttons anymore
    expect(
        container.querySelector('p[class="Snowman-buttons"]')
    ).not.toBeInTheDocument();
    // test that "You lose" appears on the screen
    expect(
        container.querySelector('p[class="Snowman-loss"]')
    ).toBeInTheDocument();
});