// Load chai expect
const expect 	= 	require('chai').expect;
const timeAgo 	= 	require('./index');

// test results to expect
var results = {
	now				: 	"chiar acum",
	seconds			: 	"acum 35 de secunde",
	minute 			: 	"acum un minut",
	minutes			: 	"acum 3 minute",
	hour 			: 	"acum o oră",
	hours			: 	"acum 3 ore",
	day 			: 	"acum o zi",
	days 			: 	"acum 3 zile",
	month 			: 	"acum o lună",
	months 			: 	"acum 3 luni",
	year 			: 	"acum un an",
	years 			: 	"acum 3 ani"
};

/**********************************************************/

describe('fromDate', function(){
	it('should return chiar acum', function(){
		expect(timeAgo(new Date())).to.equal(results.now);
	});
	it('should return acum 35 de secunde', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 1000))).to.equal(results.seconds);
	});
	it('should return acum un minut', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 1000))).to.equal(results.minute);
	});
	it('should return acum 3 minute', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 1000))).to.equal(results.minutes);
	});
	it('should return acum o oră', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 60 * 1000))).to.equal(results.hour);
	});
	it('should return acum 3 ore', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 60 * 1000))).to.equal(results.hours);
	});
	it('should return acum o zi', function(){
		expect(timeAgo(new Date(Date.now() + 25 * 60 * 60 * 1000))).to.equal(results.day);
	});
	it('should return acum 3 zile', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000))).to.equal(results.days);
	});
	it('should return acum o lună', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 24 * 60 * 60 * 1000))).to.equal(results.month);
	});
	it('should return acum 3 luni', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000))).to.equal(results.months);
	});
	it('should return acum un an', function(){
		expect(timeAgo(new Date(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000))).to.equal(results.year);
	});
	it('should return acum 3 ani', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000))).to.equal(results.years);
	});
});

describe('fromNumber', function(){
	it('should return chiar acum', function(){
		expect(timeAgo(Date.now())).to.equal(results.now);
	});
	it('should return acum 35 de secunde', function(){
		expect(timeAgo(Date.now() + 35 * 1000)).to.equal(results.seconds);
	});
	it('should return acum un minut', function(){
		expect(timeAgo(Date.now() + 65 * 1000)).to.equal(results.minute);
	});
	it('should return acum 3 minute', function(){
		expect(timeAgo(Date.now() + 3 * 60 * 1000)).to.equal(results.minutes);
	});
	it('should return acum o oră', function(){
		expect(timeAgo(Date.now() + 65 * 60 * 1000)).to.equal(results.hour);
	});
	it('should return acum 3 ore', function(){
		expect(timeAgo(Date.now() + 3 * 60 * 60 * 1000)).to.equal(results.hours);
	});
	it('should return acum o zi', function(){
		expect(timeAgo(Date.now() + 25 * 60 * 60 * 1000)).to.equal(results.day);
	});
	it('should return acum 3 zile', function(){
		expect(timeAgo(Date.now() + 3 * 24 * 60 * 60 * 1000)).to.equal(results.days);
	});
	it('should return acum o lună', function(){
		expect(timeAgo(Date.now() + 35 * 24 * 60 * 60 * 1000)).to.equal(results.month);
	});
	it('should return acum 3 luni', function(){
		expect(timeAgo(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000)).to.equal(results.months);
	});
	it('should return acum un an', function(){
		expect(timeAgo(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000)).to.equal(results.year);
	});
	it('should return acum 3 ani', function(){
		expect(timeAgo(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000)).to.equal(results.years);
	});
});

describe('fromString', function(){
	it('should return chiar acum', function(){
		expect(timeAgo(new Date().toISOString())).to.equal(results.now);
	});
	it('should return acum 35 de secunde', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 1000).toISOString())).to.equal(results.seconds);
	});
	it('should return acum un minut', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 1000).toISOString())).to.equal(results.minute);
	});
	it('should return acum 3 minute', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 1000).toISOString())).to.equal(results.minutes);
	});
	it('should return acum o oră', function(){
		expect(timeAgo(new Date(Date.now() + 65 * 60 * 1000).toISOString())).to.equal(results.hour);
	});
	it('should return acum 3 ore', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString())).to.equal(results.hours);
	});
	it('should return acum o zi', function(){
		expect(timeAgo(new Date(Date.now() + 25 * 60 * 60 * 1000).toISOString())).to.equal(results.day);
	});
	it('should return acum 3 zile', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.days);
	});
	it('should return acum o lună', function(){
		expect(timeAgo(new Date(Date.now() + 35 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.month);
	});
	it('should return acum 3 luni', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 30 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.months);
	});
	it('should return acum un an', function(){
		expect(timeAgo(new Date(Date.now() + 13 * 30 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.year);
	});
	it('should return acum 3 ani', function(){
		expect(timeAgo(new Date(Date.now() + 3 * 12 * 30 * 24 * 60 * 60 * 1000).toISOString())).to.equal(results.years);
	});
});
