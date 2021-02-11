process.stdout.write('jain\n');
process.stdin.on('data',(a)=>{
    var c = a.toString();
    process.stdout.write(c)
})