resolved[field] = Object.keys(resolved[field])
    .map(unit => resolved[field][unit])
    .reduce((acc, curr) => acc === undefined ? curr : ops[types[field] + '_' + op](acc, curr));
