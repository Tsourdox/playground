var myLibrary = function() {
    /**
     * Calculates the area of a rectagle based o it's with and hight
     * @param width {number}
     * @param height {number}
     * @returns the area of the rectangle
    */
    function calculateRectangleArea(width, height) {
        return width * height;
    }

    /**
     * Calculates the area of a triagle based o it's base and hight
     * @param base {number}
     * @param height {number}
     * @returns the area of the triagle
    */
    function calculateTriangleArea(base, height) {
        return base * height / 2;
    }

    /**
     * Calculates the area of a circle based o it's radius
     * @param radius {number}
     * @returns the area of the circle
    */
    function calculateCircleArea(radius) {
        return Math.PI * radius * radius;
    }

    return {
        calculateRectangleArea: calculateRectangleArea,
        calculateTriangleArea: calculateTriangleArea,
        calculateCircleArea: calculateCircleArea
    };
}();