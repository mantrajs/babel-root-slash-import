export default function(path) {
  class BabelRootImportHelper {

    root = global.rootPath || process.cwd();

    transformRelativeToRootPath(path, rootPathSuffix) {
      if (this.hasRoot(path)) {
        const withoutRoot = path.substring(1, path.length);

        // Here's we detect the use of Meteor that interferes with path resolution
        // global.meteorBabelHelpers is something we can see when
        // running inside Meteor.
        if (global.meteorBabelHelpers && path.startsWith(this.root)) {
          return path;
        }

        return `${this.root}${rootPathSuffix ? rootPathSuffix : ''}/${withoutRoot}`;
      }
      if (typeof path === 'string') {
        return path;
      }
      throw new Error('ERROR: No path passed');
    }

    hasRoot(string) {
      let containsTilde = false;

      if (typeof string !== 'string') {
        return false;
      }

      const firstChar = string.substring(0, 1);
      return firstChar === '/';
    }
  }

  return new BabelRootImportHelper();
}
