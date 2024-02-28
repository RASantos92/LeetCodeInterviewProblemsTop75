const canFinish = (numCourses, prerequisites) => {
    const preMap = {};
    // const preMap = Object.fromEntries(Array.from({length: numCourses}, (_, i) => [i, []]));
    for(let i = 0; i < numCourses; i++){
        preMap[i] = [];
    }
    for(let i = 0; i < prerequisites.length; i++){
        const course = prerequisites[i][0];
        const preReq = prerequisites[i][1];
        preMap[course].push(preReq)
    }

    visitSet = new Set()

    const dfs = (course) => {
        if(visitSet.has(course)){
            return false;
        }
        if(preMap[course] == []){
            return true;
        }

        visitSet.add(course);

        for(pre in preMap[course]){
            if(!dfs(course)){
                return false;
            }
        }
        visitSet.delete(course);
        preMap [course] = []
        return true;
    }

    for(let i = 0; i < numCourses; i++){
        if(!dfs(i)){
            return false;
        }
    }

    return true;

}

